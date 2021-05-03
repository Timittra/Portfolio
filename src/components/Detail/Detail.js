/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import ReactPlayer from 'react-player/youtube';
import './Detail.css';


const linkStyles = {

}

const Detail = () => {
    const [project, setProject] = useState([])
    let {id} = useParams();
    let count = parseInt(id);
    let titleCollection = [];
    let descriptionCollection = [];
    let videoCollection = [];
    let liveSiteCollection = [];
    let clientCodeCollection = [];
    let serverCodeCollection = [];

    useEffect( () => {
        setProject(fakeData);
    },[]);

    let data = project.map(item => {
        titleCollection.push(item.title);
        descriptionCollection.push(item.description);
        videoCollection.push(item.video);
        liveSiteCollection.push(item.live_site);
        clientCodeCollection.push(item.client_code);
        serverCodeCollection.push(item.server_code);
    });

    const title = (titleCollection).find(function(element, index)
    {
        if(count === 1){
            return index === 0;
        }
        else if(count === 2){
            return index === 1;
        }
        else if(count === 3){
            return index === 2;
        }
    });
    const description = (descriptionCollection).find(function(element, index)
    {
        if(count === 1){
            return index === 0;
        }
        else if(count === 2){
            return index === 1;
        }
        else if(count === 3){
            return index === 2;
        }
    });
    const video = (videoCollection).find(function(element, index)
    {
        if(count === 1){
            return index === 0;
        }
        else if(count === 2){
            return index === 1;
        }
        else if(count === 3){
            return index === 2;
        }
    });
    const liveSite = (liveSiteCollection).find(function(element, index)
    {
        if(count === 1){
            return index === 0;
        }
        else if(count === 2){
            return index === 1;
        }
        else if(count === 3){
            return index === 2;
        }
    });
    const clientCode = (clientCodeCollection).find(function(element, index)
    {
        if(count === 1){
            return index === 0;
        }
        else if(count === 2){
            return index === 1;
        }
        else if(count === 3){
            return index === 2;
        }
    });
    const serverCode = (serverCodeCollection).find(function(element, index)
    {
        if(count === 1){
            return index === 0;
        }
        else if(count === 2){
            return index === 1;
        }
        else if(count === 3){
            return index === 2;
        }
    });

    return (
        <div id='detail-page'>
           <div className="container row text-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <h1 style={{fontWeight:'700'}}>{title}</h1>
                <p>{description}</p>
                <ReactPlayer id='video-player' width="100%" loop='true' url={video} />
                <div className="btn-main">
                    <button style={{backgroundColor:'hotpink'}} className="btn-user msg-btn"><a className='text-white' href={liveSite} target='_blank' rel='noreferrer'> Preview </a></button>
                    <button style={{backgroundColor:'hotpink'}} className="btn-user msg-btn"><a className='text-white' href={clientCode} target='_blank' rel='noreferrer'> Client Side</a></button>
                    <button style={{backgroundColor:'hotpink'}} className="btn-user msg-btn"><a className='text-white' href={serverCode} target='_blank' rel='noreferrer'> Server Side</a></button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Detail;