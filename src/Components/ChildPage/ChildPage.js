import React from "react";
import "./ChildPage.css";
import BreadcrumbsGrandChild from "../BreadcrumbsGrandChild";
import TeaserBubble from "../TeaserBubble";
import List from "../List";

const ChildPage = () => {
    return (
        <div className="page child-page">
            <div className="wrapper">
                <BreadcrumbsGrandChild grandchildName="Plastic With No Numbers" />
                <h1 className="text-center h1-em mb-5">Plastics With No Numbers</h1>
                <div class="card-group card-spaceBetween ">
                    <TeaserBubble
                        src="/images/yogurt@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={true}
                        title="Yougurt, Butter, Margarine"
                    />
                    <TeaserBubble
                        src="/images/transparent-clamshell@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={true}
                        title="Transparent Clamshell Containers"
                    />
                    <TeaserBubble
                        src="/images/icon-produce-containers.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={false}
                        title="Produce Containers"
                    />
                </div>

                <div class="card-group card-spaceBetween ">
                    <TeaserBubble
                        src="/images/plastic-bags-film@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={false}
                        title="Plasic Bags or Film"
                    />
                    <TeaserBubble
                        src="/images/bottles-home-needle-disposal@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={false}
                        title="Bottles Used for Home Needle Disposal"
                    />
                    <TeaserBubble
                        src="/images/larger-than-3-gallons@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={false}
                        title="Containers Larger Than 3 Gallons"
                    />
                </div>

                <div class="card-group card-spaceBetween ">
                    <TeaserBubble
                        src="/images/hazardous-materials@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={false}
                        title="Containers That Held Hazardous Materials"
                    />
                    <TeaserBubble
                        src="/images/medicine-bottles@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={false}
                        title="Medicine Bottles"
                    />
                    <TeaserBubble
                        src="/images/toy-electronic-packaging@3x.png"
                        to="/recycle/container/plasticwithnonumbers/medicinebottle"
                        icon={true}
                        success={false}
                        title="Toy or Electronic Packaging"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChildPage;
