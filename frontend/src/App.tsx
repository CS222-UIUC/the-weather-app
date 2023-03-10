import React from 'react'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                App Name Here
            </header>
            <div className='Search-box'>
                Search
            </div>
            <div className='Graphs-header'>
                Header
            </div>
            <div className='Graph-box'>
                Graphs Here
            </div>
            <div className='Main-weather-box'>
                <div className='Main-weather-col'>
                    <div className='Main-weather-row'>
                        70°
                    </div>
                    <div className='Main-weather-row'>
                        H:74°, L:65°
                    </div>
                </div>
                <div className='Main-weather-col'>
                    Info here
                </div>
            </div>
            <div className='Scrollable-daily-forecast'>
                Daily Forecast Here
            </div>
            <div className='Scrollable-weekly-forecast'>
                Weekly Forecast Here
            </div>
            <div className='Bottom-box'>
                Warnings and Advice Here
            </div>
        </div>
    )
}

export default App
