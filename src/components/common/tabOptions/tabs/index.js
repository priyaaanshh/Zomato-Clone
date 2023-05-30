import React from 'react'
import "./tabs.css"
const Tabs = ({tab, activeTab, setActiveTab }) => {
    return (
        <div className={`tab-item absolute-center cursor-point ${activeTab === tab.name && 'active-tab'
            }`} onClick={() => setActiveTab(tab.name)}>
            <div className='tab-image-container absolute-center'
                style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : ''}` }}>
                <img className='tab-image' alt={tab.name} src={activeTab === tab.name ? tab.active_img : tab.inactive_img} />
            </div>
            <div className='tab-name'>{tab.name}</div>
        </div>
    )
}

export default Tabs
