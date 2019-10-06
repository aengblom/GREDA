import React from "react";
import BreadcrumbsGrandChild from "../Components/BreadcrumbsGrandChild";
import TeaserBubble from "../Components/TeaserBubble";

const PlasticWithNumbers = () => {
    return <div className="page child-page">
        <div className="wrapper">
            <BreadcrumbsGrandChild grandchildName="Plastic With Numbers" />
            <h1 className="text-center h1-em mb-5">Plastic With Numbers</h1>
            <div class="card-group">
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={true}
                    title="1"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={true}
                    title="2"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="3"
                />
            </div>

            <div class="card-group">
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={true}
                    title="4"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={true}
                    title="5"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="6"
                />
            </div>


            <div class="card-group">
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={true}
                    title="7"
                />
            </div>


        </div>
    </div>;
}

export default PlasticWithNumbers;