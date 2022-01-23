
import React from 'react'
import { ImFacebook2 } from "react-icons/im";


const Feed = React.memo((props) => {
    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <React.Fragment>
            <div id="fb-root"></div>
            <div
                class="fb-page"
                data-href="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/"
                data-tabs="timeline"
                data-width="360"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="false"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/"
                    class="fb-xfbml-parse-ignore"
                >
                    <button><a className=" rounded-lg text-blue-500 " href="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/">"Malancha"(Sahitya, Sanskriti & Samajik Kendra)<ImFacebook2 color="blue" className="mx-40 md:mx-10" /></a></button>
                </blockquote>
            </div>
        </React.Fragment>
    );
});
export default Feed;
