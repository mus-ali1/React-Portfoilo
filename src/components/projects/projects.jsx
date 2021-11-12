import React from './projects.scss'

export default function projects() {
    return (
        <section class="container" id="projects">

        <h2 class="container-title">Projects</h2>
        <div class="grid-layout">

            <div class="web-image" id="full-size-image">
                <img src="./assets/Screenshot.png" alt="" class="screenshot"/>
                <div class="image-title">
                    <h3>Full-Stack Application</h3>
                    <a href="https://github.com/mus-ali1/sharing-is-caring">GitHub Repo</a>
                    <a href="https://sharing-is-caring-dreamteam.herokuapp.com/login">Deployed</a>

                </div>
            </div>

            <div class="web-image">
                <img src="./assets/employee-tracker.png" alt="" class="screenshot"/>
                <div class="image-title">
                    <h3>Employee Tracker</h3>
                    <a href="https://github.com/mus-ali1/EmployeeTracker"> GitHub Repo</a>
                </div>
            </div>

            <div class="web-image">
                <img src="./assets/express-noteTaker.png" alt="" class="screenshot"/>
                <div class="image-title" id="code-image">
                    <h3>Note-Taker</h3>
                    <a href="https://github.com/mus-ali1/Note-Taker">GitHub Repo</a>
                    <a href="https://musali-note-taker.herokuapp.com/">Deployed</a>
                </div>
            </div>

            <div class="web-image">
                <img src="./assets/ReadMeGenerator.png" alt="" class="screenshot"/>
                <div class="image-title">
                    <h3> Professiona ReadME Generator</h3>
                    <a href="https://github.com/mus-ali1/Professional-README-Generator">GitHub Repo</a>

                </div>
            </div>


            <div class="web-image">
                <img src="./assets/weather.png" alt="" class="screenshot1"/>
                <div class="image-title">
                    <h3>Weather-Dashboard</h3>
                    <a href="https://github.com/mus-ali1/Weather-Dashboard">GitHub Repo</a>
                    <a href="https://mus-ali1.github.io/Weather-Dashboard/">Deployed</a>
                </div>
            </div>
            </div>
    </section>
      
    )
}
