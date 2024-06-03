function Display(props)
{   return(
        <div className="imga">
           <iframe width="560" height="315" src={props.img} title={props.abo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                  
        <p>{props.abo}</p>
        <div className="starsdisplay">
        </div>  
        </div> ) 
}
function Page()
{   return(
        <div>
            <header> 
                <nav className="head">
                    <img src="logo-vedio.jpg" className="logo"></img>
                    <img src="icon-video.png" className="logo"></img>
                </nav>
            </header>
            <div className="maindiv">
                <div className="written">
                    <h1>Language</h1>
                    <p className="explain">Hindi</p>
                </div>
            </div>
            <div className="mainimga">
                <Display 
                    img="https://www.youtube.com/embed/6d5SS0gS5bU?si=jM9tVVzOjRxozsY5"
                    abo="Tainu Khabar Nahi - Arijit Singh | Munjya | Sharvari, Abhay Verma| Sachin-Jigar,Amitabh Bhattacharya"
                />
                <Display
                    img="https://www.youtube.com/embed/IZF-rOe9u-g?si=FwBhSav-2h4N_DP5"
                    abo="Enna Sona | @ARRahman | OK Jaanu | Arijit Singh | Shraddha Kapoor | Aditya Roy | Gulzar | 4K"
                />
                <Display
                    img="https://www.youtube.com/embed/mNuhKUOD_A0?si=I7NlEkKocCtWpXEF"
                    abo="Deva Deva - Extended Film Version|Brahmāstra|Amitabh B|Ranbir |@aliabhatt|@pritam7415 |Arijit|Jonita"
                />
                <Display
                    img="https://www.youtube.com/embed/qoq8B8ThgEM?si=jCuYKBSzRh0uC-JC"
                    abo="Tujh Mein Rab Dikhta Hai Song | Rab Ne Bana Di Jodi | Shah Rukh Khan, Anushka Sharma | Roop Kumar"

                />
            </div>
            <div className="maindiv">
                <div className="written">
                    <p className="explain">kannada</p>
                </div>
            </div>
            <div className="mainimga">
                <Display
                    img="https://www.youtube.com/embed/_YRZ0jON6Pk?si=wN0eEEjdoeoWuo4t"
                    abo="Nanage Neenu Video Song | Chikkanna | Malaika | Smitha Umapathy | Arjun Janya|Anil Kumar|Upadhyaksha"
                />
                <Display
                    img="https://www.youtube.com/embed/3XShkcOze3s?si=stpbOFWnMGlbtwas"
                    abo="Kantara - Singara Siriye |Vijay Prakash|Ananya Bhat |Ajaneesh Loknath |Rishab Shetty|Hombale Films"
                />
                <Display
                    img="https://www.youtube.com/embed/ZqN-2PLOeJ0?si=WtJha77J-P07xpid"
                    abo="Pasandaagavne Lyrical | Kaatera | Darshan | Aradhanaa | Tharun | V.Harikrishna | Chethan Kumar"
                />
                <Display
                    img="https://www.youtube.com/embed/gH_RYRwVrVM?si=I4iMRz1xuIkzcU4B"
                    abo="Kantara - Varaha Roopam(Lyric Video)| Sai Vignesh | Rishab Shetty | Ajaneesh Loknath | Hombale Films"
                />
            </div>
            <div className="maindiv">
                <div className="written">
                    <p className="explain">Telugu</p>
                </div>
            </div>
            <div className="mainimga">
                <Display
                    img="https://www.youtube.com/embed/JTpDCoxZdv8?si=8iIJ2r96A4I4DORg"
                    abo="Na Roja Nuvve - Video Song | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Hesham Abdul Wahab"
                />
                <Display
                    img="https://www.youtube.com/embed/4HQ0S2vfX2s?si=MzZTlCI0J5DpJ5Vv"
                    abo="Tune Jo Na Kaha Lofi l Sleeping 😴 Songs l Touch the soul ❤️"
                />
                </div>
            </div>

)
}

ReactDOM.render(<Page />,document.getElementById("root"));
