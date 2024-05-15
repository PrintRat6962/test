<script>
    import PortItem from "./subComp/PortItem.svelte";
    let ramen = "./images/ramen_site.png";
    let bike = "./images/bike_site.png";
    let airbnb = "./images/airBNBclone.png";
    let meme = "./images/memeGen.png";
</script>

<section class="section sec3 portfolio">
    <div class="main-title">
        <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
    </div>

    <h3 class="sec-title">HTML & CSS</h3>
    <div class="port-sec">

        <PortItem 
            img = {ramen} 
            link = "https://printrat6962.github.io/RestaurantWebite/"
            linkref = "https://github.com/PrintRat6962/RestaurantWebite"
            desc = "Ramen Site"
        />

        <PortItem 
            img = {bike} 
            link = "https://printrat6962.github.io/BikeWebsite/"
            linkref = "https://github.com/PrintRat6962/BikeWebsite"
            desc = "Bike Shop Site"
        />
    </div>

    <h3 class="sec-title">React</h3>
    <div class="port-sec">

        <PortItem 
            img = {airbnb} 
            link = "https://printrat6962.github.io/AirBNBClone/"
            linkref = "https://github.com/PrintRat6962/AirBNBClone"
            desc = "AirBNB Clone Site"
        />

        <PortItem 
            img = {meme} 
            link = "https://printrat6962.github.io/MemeGeneratorReact/"
            linkref = "https://github.com/PrintRat6962/MemeGeneratorReact"
            desc = "Meme Generator"
        />
    </div>

    <!-- <h3 class="sec-title">MERN Stack</h3>
    <div class="port-sec">

        <PortItem 
            img = {ramen} 
            link = "https://printrat6962.github.io/AirBNBClone/"
            linkref = "https://printrat6962.github.io/AirBNBClone"
            desc = "Ramen Site"
        />


    </div> -->
</section>

<style>
    .sec3{
	    transform: translateY(0) scale(1);
    }

    .port-sec{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        margin-top: 1rem;
        margin-bottom: 3rem;
    }

    .sec-title{
        font-family: 'Open Sans';
        text-decoration: underline;
        color: rgba(204, 202, 202, 0.801);
    }
</style>