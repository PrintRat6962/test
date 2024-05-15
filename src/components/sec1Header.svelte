<script>
    let src = "./images/Face_Shote.jpg"
    let ref = "./Docs/Christian_ReyesCV.pdf"
</script>

<header class="section sec1 header active">
    <div class="header-content">
        <div class="left-header">
            <div class="h-shape"></div> <!--h-shape will act as a background behind the image-->
            <div class="image">
                <img {src} alt="" class="portrait">
            </div>
        </div>
        <div class="right-header">
            <h1 class="title">
                Hello, I'm <span class="name">Christian Reyes</span>. 
                Welcome to my page!
            </h1>
            <br>
            <p class="describe">
                I'm a software developer with an interest in fullstack and cloud development. My other interests include running, gaming, and cooking.
            </p>
            <div class="btn-con">
                <a href={ref} download="ReyesCV" class="main-btn">
                    <span class="btn-text">Download CV</span>
                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                </a>
            </div>
        </div>
    </div>
</header>

<style>
    .sec1{
	    /* display: none; */
	    transform: translateY(0) scale(1);
    }

    .header-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
    }

    .left-header{
        display: flex;
        align-items: center;
        position: relative;
    }

    .h-shape
    {
        transition: all .4s ;
        width: 65%;
        height: 100%;
        background-color: var(--color-secondary);
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
    }

    .right-header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 10rem;
    }

    .title{
        font-size: 2.5rem;
        padding-bottom: 20px;
    }

    .title > .name{
        color: var(--color-secondary)
    }

    .describe{
        padding-bottom: 20px;
    }

    .portrait{
        width: 50%;
        object-fit: cover;
        margin-left: 3rem;
        transition: all .4 ease-in-out;
        border-radius: 5%;
        filter: grayscale(30%);
    }

    .btn-con{
        display: flex;
        align-self: flex-start;
    }

    .main-btn{
        border-radius: 30px;
        color: inherit;
        font-weight: 600;
        position: relative;
        border: 1px solid var(--color-secondary);
        display: flex;
        align-items: center;
        overflow: hidden;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            transform: translateX(100%);
            transition: all .4s ease-out;
            z-index: -1;
        }

        &:hover
        {
            &::before{
                width: 100%;
                height: 100%;
                background-color: var(--color-secondary);
                transform: translateX(0);
        }
    }
    }

    .main-btn > .btn-text{
        padding: 0 2rem;
    }

    .main-btn > .btn-icon{
        background-color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 1rem;
    }
</style>