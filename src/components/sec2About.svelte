<script>
    import AboutStats from "./subComp/AboutStats.svelte";
    import Langs from "./subComp/Langs.svelte";
</script>

<section class="section sec2 about">
    <div class="main-title">
        <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
    </div>
    <div class="about-container">
        <div class="left-about">
            <h4>Information About Me</h4>
            <p>
                Graduated from Lake Forest College with a double major in Computer Science and Asian Studies.
                Along with learning programming languages and tech stacks, I also pursue learning multiple 
                languages. 
            </p>
        </div>
        <div class="right-about">
            <div class="about-item">
                <div class="abt-text">
                    <p class="large-text">5+</p>
                    <p class="small-text">Projects <br> Completed</p>
                </div>
            </div>
            <div class="about-item">
                <div class="abt-text">
                    <p class="large-text">2</p>
                    <p class="small-text">Years of <br> Experience</p>
                </div>
            </div>
            <div class="about-item">
                <div class="abt-text">
                    <p class="large-text">2</p>
                    <p class="small-text">Languages <br> Learning</p>
                </div>
            </div>
        </div>
    </div>
    <div class="about-stats">
        <h4 class="stat-title">My Skills</h4>
        <AboutStats language = "HTML" prog = "90%"/>
        <AboutStats language = "CSS" prog = "90%"/>
        <AboutStats language = "React" prog = "60%" />
        <AboutStats language = "MongoDB" prog = "75%" />
        <AboutStats language = "SpringBoot" prog = "60%" />
        <AboutStats language = "Express" prog = "70%" />
        <AboutStats language = "Python" prog = "80%" />
        <AboutStats language = "Java" prog = "75%" />
        <AboutStats language = "SQL" prog = "70%" />
        <AboutStats language = "Bootstrap" prog = "75%" />
        <AboutStats language = "C++" prog = "50%" />
        <AboutStats language = "Svelte" prog = "50%" />

    </div>
    <div class="lang-stats">
        <h4 class="stat-title">My Languages</h4>
        <Langs language = "English" level = "Native"/>
        <Langs language = "Mandarin" level = "Intermediate"/>
        <Langs language = "Japanese" level = "Beginner"/>
    </div>
</section>

<style>
    .sec2{
	    transform: translateY(0) scale(1);
    }

    .about-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-top: 3.5rem;
        padding-bottom: 5rem;
    }

    .right-about{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }

    .about-item{
        border: 1px solid var(--color-grey-5);
        border-radius: 5px;
        transition: all .4s ease-in-out;
        box-shadow: 1px 2px 15px rgba(0, 0, 0, .1);
        &:hover{
            cursor: default;
            transform: translateY(-5px);
            border: 1px solid var(--color-secondary);
            box-shadow: 1px 4px 15px rgba(0, 0, 0, .32);
        }
    }

    .abt-text{
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .large-text{
        font-size: 3rem;
        font-weight: 700;
        color: var(--color-secondary);
    }

    .small-text{
        padding-left: 3rem;
        position: relative;
        text-transform: uppercase;
        font-size: 1.2rem;
        color: var(--color-grey-1);
        letter-spacing: 2px;
        &::before /*Note: before is just used to place content before the parent element*/
        {
            content: '';
            position: absolute;
            left: 0;
            top: 15px;
            width: 2rem;
            height: 2px;
            background-color: var(--color-grey-5);
        }
    }

    .left-about{
        padding-right: 3rem;
    }

    .left-about > p{
        line-height: 1.5rem;
        padding: 1rem;
        color: var(--color-grey-1)
    }

    .left-about > h4{
        font-size: 2rem;
        text-transform: uppercase;
    }

    .about-stats{
        padding-bottom: 4rem;
    }
</style>