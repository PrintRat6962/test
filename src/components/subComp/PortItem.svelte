<script>
    export let img;
    export let link;
    export let linkref;
    export let desc;

    
</script>

<div class="portfolio-item">
    <div class="images">
        <img src={img} alt="">
    </div>
    <div class="hover-item">
        <a href={link} target="_blank">
            <h3>Open Site</h3>
        </a>
        <div class="icons">
            <a class="icon" href={linkref} target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <h3 class="description">{desc}</h3>
</div>

<style>
    .portfolio-item{
        position: relative;
        width: 20rem;
    }

    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 15%;
    }

    .portfolio-item > .hover-item{
        width: 100%;
        height: 100%;
        background-color: var(--color-secondary);
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        transform: scale(0);
        transition: all .4s ease-in-out;
    }

    h3{
        font-size: 3rem;
        color: var(--color-white);
        text-align: center;
        transition: all .4s ease-in-out;
        &:hover{
            color: var(--color-grey-4);
        }
    }

    .icons{
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icons > .icon{
        background-color: var(--color-primary);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
        cursor: pointer;
        transition: all .4s ease-in-out;
        &:hover{
            background-color: var(--color-white);
            /* i{
                color: var(--color-primary);
            } */
        }
    }

    .icon > i{
        font-size: 1.5rem;
        color: var(--color-white);
        margin: 0 1rem;
    }

    .description{
        text-align: center;
        font-size: 1.75rem;
    }

    .portfolio-item:hover .hover-item
    {
        opacity: 1;
        transform: scale(1)
    }
</style>