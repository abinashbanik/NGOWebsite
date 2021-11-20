import React from 'react'

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
        <React.Fragment >
            <div id="fb-root"></div>
            <div
                class="fb-page"
                data-href="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                className="mt-30 "
            >
                <blockquote
                    cite="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/"
                    class="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/">
                        "Malancha"(Sahitya, Sanskriti & Samajik Kendra)</a>
                </blockquote>
            </div>
        </React.Fragment>
    );
});
export default Feed;



//https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/
