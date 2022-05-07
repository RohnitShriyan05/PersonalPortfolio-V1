import './Navbar.css';

export default function Navbar(props){
    return(
        <div className={props.tbg ? 'dark-theme navwrapper w-screen border-b-2 fixed ' : 'light-theme navwrapper w-screen border-b-2 fixed'}>
            <ul className='flex py-2 px-6'>
                <li className='flex-1 navname'>
                    <a href="/">RS</a>
                </li>
                <li className='pr-10'>
                    <a href="/projects" className='nav hover:underline'>Projects</a>
                </li>
                <li>
                    <a href="/contact" className='nav hover:underline'>Contact</a>
                </li>
            </ul>
        </div>
    );
}