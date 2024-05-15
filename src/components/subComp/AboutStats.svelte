<script>
    export let language;
    export let prog;
</script>

<div class="progress-bars">
    <div class="progress-bar">
        <p class="prog-title">{language}</p>
        <div class="progress-con">
            <p class="prog-text">{prog}</p>
            <div class="progress">
                <span class={language} style="width: {prog};"></span>
            </div>
        </div>
    </div>
</div>

<style>
    /* div{
        --HTML: 90%;
        --CSS: 90%;
        --JavaScript: 75%;
        --React: 60%;
        --MongoDB: 75%;
        --SpringBoot: 60%;
        --Express: 70%;
        --Python: 80%;
        --Java: 75%;
    } */

    .progress-bars{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 10px;
    }

    .progress-bar{
        display: flex;
        flex-direction: column;
    }

    .prog-title{
        text-transform: uppercase;
        font-weight: 500;
    }

    .progress-con{
        display: flex;
        align-items: center;
    }

    .prog-text{
        color: var(--color-grey-2);
    }

    .progress{
        width: 100%;
        height: .45rem;
        background-color: var(--color-grey-4);
        margin-left: 1rem;
        position: relative;
    }

    .progress > span{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: var(--color-secondary);
        transition: all .4s ease-in-out;
        width: 60%;
    }
</style>