import React from "react";
import "./ChildPage.css";
import BreadcrumbsGrandChild from "../BreadcrumbsGrandChild";
import TeaserBubble from "../TeaserBubble";

const ChildPage = () => {
    return <div className="page child-page">
        <div className="wrapper">
            <BreadcrumbsGrandChild grandchildName="Plastic With No Numbers" />
            <h1 className="text-center h1-em mb-5">Plastics With No Numbers</h1>
            <div class="card-group">
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={true}
                    title="Yougurt, Butter, Margarine"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={true}
                    title="Transparent Clamshell Containers"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="Produce Containers"
                />
            </div>

            <div class="card-group">
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="Plasic Bags or Film"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="Bottles Used for Home Needle Disposal"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="Containers Larger Than 3 Gallons"
                />
            </div>


            <div class="card-group">
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="Containers That Held Hazardous Materials"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="Medicine Bottles"
                />
                <TeaserBubble
                    src="http://via.placeholder.com/100x100"
                    to=''
                    icon={true}
                    success={false}
                    title="Toy or Electronic Packaging"
                />
            </div>


        </div>
    </div>;
}

export default ChildPage;