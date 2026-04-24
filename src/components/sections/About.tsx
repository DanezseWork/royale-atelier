export function About(){
    return(
        <div className="bg-[#f1ebe3] font-boston h-250 flex items-center relative pt-60 pb-20">
            <img src="/images/about-pic.png" className="absolute right-50 h-120 -rotate-5 z-10" />
            <span className="absolute left-45 top-110 w-150 text-center rotate-4 z-10 text-[25px]">Founded by cosplayer Cora San in 2023, Royale Atelier (formerly Regium Cosplay Services) grew from small projects into a dedicated space for wig styling and cosplay rentals. Alongside Tiara’s Wig Styling, the brand is known for its fluffy, natural finish and airbrushed look, creating character-accurate wigs for passionate cosplayers.</span>
            <img src="/images/about-container.svg" className="absolute left-20" />
            <img className="absolute -bottom-50 z-20" src="/images/ribbon-pattern.svg" />
        </div>
    )
}