import React from "react";
import './Projects.css'
import myproject_data from "../../assets/myproject_data";
import arrow_icon from "../../assets/arrow_icon.svg"
const Projects = () => {

    const handleClick = (projectName) => {
        // Logic to determine the GitHub URL based on project name
        let githubURL = "";
        if (projectName === "India Drive") {
            githubURL = "https://github.com/Sushilgavit/Fleet_Management_System";
        } else if (projectName === "Portfolio") {
            githubURL = "https://github.com/Sushilgavit/portfolio";
        }
        // Open the GitHub repository in a new tab
        window.open(githubURL, "_blank");
    };


    return (
        <div id="projects" className="projects">
            <div className="projects-title">
                <h1 className="title">My Recent Works</h1>

            </div>




            <div className="myprojects-container">
                {/* {myproject_data.map((project, index) => {
                    return <img key={index} src={project.p_img} alt="" />
                })} */}

                {myproject_data.map((project, index) => (
                    // Wrap each image in an anchor tag with an onClick event
                    <a key={index} href="#" onClick={() => handleClick(project.p_name)}>
                        <img src={project.p_img} alt={project.p_name} />
                    </a>
                ))}
            </div>
            {/* <div className="myproject-showmore">
                <p>Show More</p>
                <img src={arrow_icon}></img>
            </div> */}
        </div>
    )
}

export default Projects