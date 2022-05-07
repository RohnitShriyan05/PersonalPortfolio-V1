import "./Land.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
export default function LandPg() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center  py-10 px-10 border-b-2" data-aos="zoom-in" data-aos-duration="2000">
     
      <h3 className="cursor-default">Hi, my name is</h3>
      <h1 className="name cursor-default">ROHNIT SHRIYAN</h1>
      <h3 className="cursor-default">I am a</h3>
      <h1 className="title cursor-default">FULLSTACK<br className="2xl:hidden inline"></br> WEB DEVELOPER</h1>
      <a
        href="/contact"
        className="calltoaction absolute right-2 top-1/2 hidden xl:inline pl-10 ml-10 "
      >
        <h3>
          Let's talk
          <ArrowRightAltIcon fontSize="8vmin" />
        </h3>
      </a>
      <a
        href="/contact"
        className="calltoactionmobile absolute inline xl:hidden underline underline-offset-4 decoration-black"
      >
        <h3>
          Let's talk!
          <ArrowRightAltIcon fontSize="8vmin" />
        </h3>
      </a>
    </div>
  );
}
