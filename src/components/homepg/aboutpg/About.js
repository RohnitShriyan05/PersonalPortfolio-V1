import "./About.css";
import FooterPg from "./FooterPg/FooterPg";
export default function AboutPg() {
  return (
    <div className="aboutwrapper h-screen w-screen flex flex-col ">
      <div className="AboutText w-full h-full grid grid-place-items-center items-center text-justify">
        <h4>
          <span className="AboutMe">About: </span>Hi my name is Rohnit Shriyan,
          I am a full stack web developer with a stronger focus on frontend and
          web design . I use MERN as my main tech stack, and currently I'm
          learning webgl and threejs. Drop me a{" "}
          <a href="/contact" className="text-yellow-500">
            message{" "}
          </a>
          if you want to hire me or colaborate with me on some cool projects. I
          am open to internship / part-time opportunities.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="AboutMe">Skills: </span>
          html, css, javascript, reactjs, redux, express, nodejs, mongodb, restfull-api
          tailwindcss, bootstrap, gsap, npm, git, vscode.
        </h4>
      </div>
      <FooterPg />
    </div>
  );
}
