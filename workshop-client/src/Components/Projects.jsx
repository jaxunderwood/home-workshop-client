import React, { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';
import FavoriteButton from '../shared/Favorite.jsx';

export default function Projects({ favorites, onToggleFavorite }) {
   const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/projects')
        .then((response) => response.json())
        .then((data) => {
            setProjectList(data);
        })
        .catch((error) => console.error('Error fetching projects:', error));
    }, []);



    // Mock data representing what your database will eventually return
    // const [projects] = useState([
    //     {
    //         id: 1,
    //         title: "Workshop Bench",
    //         level: "Intermediate",
    //         description: "A sturdy workbench for your garage with a built-in tool rack.",
    //         tools: ["Circular Saw", "Impact Driver", "Level"],
    //         materials: ["(8) 2x4 Lumber", "3-inch Wood Screws", "3/4-inch Plywood"],
    //         steps: [
    //             "Cut the 2x4s to length for the legs and frame.",
    //             "Assemble the top and bottom frames using wood screws.",
    //             "Attach the legs to the frames, ensuring everything is level.",
    //             "Secure the plywood sheet to the top frame as your work surface."
    //         ]
    //     }
    // ]);




    return (
        <div className={styles.container}>
            {projectList.map((project) => (
                <section key={project.id} className={styles.projectSection}>

                    <div className={styles.titleRow}>
                        <h1 className={styles.projectTitle}>{project.title}</h1>

                    </div>

                <div className={styles.projectContainer}>
                    <p className={styles.projectLevel}>{project.level}</p>
                    <FavoriteButton className={styles.fave}
                                    isFavorited={isCurrentlyFavorited}
                                    onToggle={() => onToggleFavorite(project)}
                                />
                </div>
                    <p>{project.description}</p>

                    <div className={styles.projectLists}>
                        <div className={styles.projectH3}>
                            <h3>Tools Needed</h3>
                            <ul className={styles.projectL}>
                                {project.tools.map((tool, i) => <li key={i}>{tool}</li>)}
                            </ul>
                        </div>

                        <div className={styles.projectH3}>
                            <h3>Materials</h3>
                            <ul className={styles.projectL}>
                                {project.materials.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.projectH3}>
                        <h3>Build Steps</h3>
                        <ol className={styles.stepList}>
                            {/* This maps through your steps array in order */}
                            {project.steps.map((step, i) => (
                                <li key={i} className={styles.stepItem}>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                </section>
            ))}
        </div>
    );
}
