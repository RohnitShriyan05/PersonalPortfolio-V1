import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function FooterPg(){
    return(
        <div className="wrapper w-full border-t-2">
            <div className='FooterLinks flex w-screen text-center justify-center'>
                <a href="https://www.linkedin.com/in/rohnit-shriyan-7319a1217/" target="_blank" className='LinkedIn'><LinkedInIcon fontSize='20vmin'/></a>
                <a href="/Github"><GitHubIcon fontSize='20vmin'/></a>
            </div>
        </div>
    );
}