import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import {toast } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay';


import './dashboard.css';
 


function Dashboard(props) {

    const [isProcessed,setIsProcessed]=useState(false);

    

   

    

    

    const [text,setText]=useState('');
    const [topics,setTopics]=useState([]);
    const [summary,setSummary]=useState([]);
    const [keyPhrases,setKeyPhrases]=useState([]);

    const [loading,setLoading]=useState(false);
    

    const onChange=(e)=>{
        setText(e.target.value);
    }


    const submit =async(e)=>{
        e.preventDefault();
        setLoading(true);
        const config={
            headers:{
                'Ocp-Apim-Subscription-Key':`${process.env.REACT_APP_AZURE_KEY_TEXT_ANALYSIS}`,
                'Ocp-Apim-Subscription-Region':'westus2',
                'Content-Type':'application/json'
            }
           
        }

        try{
            const keyPhrases = await axios.post('https://text-analysis-hackathon.cognitiveservices.azure.com/text/analytics/v3.1-preview.4/keyPhrases',{ "documents": [{ "id": "1", "text":JSON.stringify(text)}]},config)

            console.log(keyPhrases);
            setKeyPhrases(keyPhrases.data.documents[0].keyPhrases)
            const topics = await axios.post('https://text-analysis-hackathon.cognitiveservices.azure.com/text/analytics/v3.0/entities/recognition/general',{ "documents": [{ "id": "1", "text":JSON.stringify(text)}]},config)
            var enyData=topics.data.documents[0].entities
            var topicsArray=[];
            for(var i=0;i<enyData.length;i++){
                if(enyData[i].category !== 'Quantity'){
                    topicsArray.push(enyData[i].text.toLowerCase())
                }
            }

            const topicsData=[...new Set(topicsArray)];
            setTopics(topicsData)
            const data= new FormData();
            data.append('text',text)
            const summaryResult = await axios.post('https://api.deepai.org/api/summarization',data,{
                headers:{
                    'api-key':process.env.REACT_APP_DEEP_AI_SUMMARIZATION
                }
            })

            setSummary(summaryResult.data.output)
            
            
            setIsProcessed(true);

            toast.success('🦄 Your content is simplified and ready to be learnt.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setLoading(false);
        }catch(err){
            console.log(err);
            setLoading(false);
            toast.error('Something went wrong please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }
    }
    

    
    

    

    

    
   
    return isProcessed?(
        <div>
            
            <div className="container">
            
            <label for="exampleFormControlTextarea1" style={{marginTop:'5rem'}}> Uploaded Text</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" value={text}></textarea>
            
            
           
            <div className="row">
                <div className="col col-lg-4" style={{marginTop:'2rem'}}>
                <h3>Topics</h3>
                {
                    topics.map((topic)=>{
                        return(
                            <a href={`https://google.com/search?q=${topic.split(' ').join('+')}`} target="_blank"><h5><span style={{marginRight:'10px'}} class="badge badge-success">{topic}</span></h5></a>
                        )
                    })
                }
                </div>
                <div className="col col-lg-8">
                <ul class="list-group" style={{marginTop:'2rem'}}>
                <li class="list-group-item"><b>Key Phrases</b></li>
                {
                    keyPhrases.map((phrases)=>{
                        return(
                            <li class="list-group-item">{phrases}</li>
                        )
                    })
                }
                
                
            </ul>
                    
                </div>
            </div>

            <div class="card" style={{marginTop:'2rem',marginBottom:'3rem'}} >
                
                    <div class="card-body">
                    <h5 class="card-title">Summary</h5>
                    
                                <p className="text-justify">{summary}</p>
                          
                        
                    
                    </div>
                </div>

            
          
                    
            </div>
            
                
            
        </div>

    ):(
        <div>
        <LoadingOverlay
  active={loading}
  spinner
  text='Loading your content...'
  >
        
            <div className="container">
            <form class="form-group" style={{marginTop:'5rem'}} onSubmit={submit}>
                <label for="exampleFormControlTextarea1">Paste the text - currently upto 500 words only</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" onChange={onChange}></textarea>

                <button style={{marginTop:'20px'}} type="submit" className="btn btn-block btn-success">Submit</button>
            </form>
                    
                </div>
                
                </LoadingOverlay>
        </div>
    )
}

export default Dashboard;