import React from 'react'
import TabPaneItem from './TabPaneItem'
import Data from '../../Data/Data.json'

const arrLeftTopClothes = [1100, 900, 700, 500, 1100, 900]
const arrTopTopClothes = [20, 20, 20, 20, -300, -300]
const arrTopHairStyles = [-130, -130, -130]

const getTypesTabPane = (type, arrTabPanes) => {
    let tempArr = [];
    arrTabPanes.forEach(item => {
        if (item.type === type)
            tempArr.push(item);
    });
    return tempArr;
}

const renderTabPanesWrapper = () => {
    return Data.navPills.map((item, index) => {
        let activeFade = item.tabName === "tabTopClothes" ? "active" : "fade";
        return (
            <div key={index} className={`tab-pane container ${activeFade}`} id={item.tabName}>
                <div className="row">
                    {renderTabPane(item.tabName, Data.tabPanes)}
                </div>
            </div>
        )
    })
}

const renderTabPaneInner = (tempArr) => {
    return tempArr.map((item, index) => {
        return (
            <TabPaneItem key={index}  top={item.type === 'hairstyle' ? arrTopHairStyles[index] : arrTopTopClothes[index]} left={arrLeftTopClothes[index]} TabPaneItem={item} />
        )
    })
}

const renderTabPane = (tabName, arrTabPane) => {
    let tempArr = [];
    let htmlTabPane = "";
    switch (tabName) {
        case "tabTopClothes": {
            tempArr = getTypesTabPane("topclothes", arrTabPane);
            htmlTabPane = renderTabPaneInner(tempArr);
            break;
        }
        case "tabBotClothes": {
            tempArr = getTypesTabPane("botclothes", arrTabPane);
            htmlTabPane = renderTabPaneInner(tempArr);
            break;
        }
        case "tabShoes": {
            tempArr = getTypesTabPane("shoes", arrTabPane);
            htmlTabPane = renderTabPaneInner(tempArr);
            break;
        }
        case "tabHandBags": {
            tempArr = getTypesTabPane("handbags", arrTabPane);
            htmlTabPane = renderTabPaneInner(tempArr);
            break;
        }
        case "tabNecklaces": {
            tempArr = getTypesTabPane("necklaces", arrTabPane);
            htmlTabPane = renderTabPaneInner(tempArr);
            break;
        }
        case "tabHairStyle": {
            tempArr = getTypesTabPane("hairstyle", arrTabPane);
            htmlTabPane = renderTabPaneInner(tempArr);
            break;
        }
        default: {
            tempArr = getTypesTabPane("background", arrTabPane);
            htmlTabPane = renderTabPaneInner(tempArr);
            break;
        }
    }
    return htmlTabPane;
}

export default function TabPanes(props) {
    return (
        <div className="well">
            <div className="tab-content">
                {renderTabPanesWrapper()}
            </div>
        </div>

    )
}
