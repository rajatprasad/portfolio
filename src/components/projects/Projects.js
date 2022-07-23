import "./projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="project__container">
        <h2 className="title">Projects</h2>
        <div className="project__content">
          <div className="project__img">
            <img src={project1} alt="project-img" />
          </div>
          <div className="project__info">
            <div className="project__title">
              <h2>Netflix Clone</h2>
              <div className="project__stack">
                <span className="react">react</span>
                <span className="js">javascript</span>
                <span className="css">css</span>
              </div>
            </div>
            <p>
              This is a static clone of Hashnode's landing page, an awesome
              blogging service for developers. I wrote an article on what I
              learnt while building this project and it amazingly got featured
              on hashnode's Weekly digest.
            </p>
            <div className="project__link">
              <a
                href="https://github.com/rajatprasad/Netflix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="github" />
              </a>
              <a
                href="netflix-6361e.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal className="link" />
              </a>
            </div>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img">
            <img src={project2} alt="project-img" />
          </div>
          <div className="project__info">
            <div className="project__title">
              <h2>Hungry App</h2>
              <div className="project__stack">
                <span className="react">react</span>
                <span className="js">javascript</span>
                <span className="css">css</span>
              </div>
            </div>
            <p>
              This is a static clone of Hashnode's landing page, an awesome
              blogging service for developers. I wrote an article on what I
              learnt while building this project and it amazingly got featured
              on hashnode's Weekly digest.
            </p>
            <div className="project__link">
              <a
                href="https://github.com/rajatprasad/hungry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="github" />
              </a>
              <a
                href="https://hungry-rajat.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal className="link" />
              </a>
            </div>
          </div>
        </div>

        <div className="project__content">
          <div className="project__img">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="project-img"
            />
          </div>
          <div className="project__info">
            <div className="project__title">
              <h2>Hashnode Clone</h2>
              <div className="project__stack">
                <span className="react">react</span>
                <span className="js">javascript</span>
                <span className="css">css</span>
              </div>
            </div>
            <p>
              This is a static clone of Hashnode's landing page, an awesome
              blogging service for developers. I wrote an article on what I
              learnt while building this project and it amazingly got featured
              on hashnode's Weekly digest.
            </p>
            <div className="project__link">
              <AiFillGithub className="github" />
              <BiLinkExternal className="link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
