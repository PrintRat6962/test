<script>
    let activeBtnIndex = 0;

    const setActiveBtn = (index) => {
        activeBtnIndex = index
    }
</script>

<!-- <div class="controls">
    <div class="control control-1 active-btn" data-id="home">
        <i class="fa-solid fa-house"></i>
    </div>
    <div class="control control-2" data-id="about">
        <i class="fa-solid fa-user"></i>
    </div>
    <div class="control control-3" data-id="portfolio">
        <i class="fa-solid fa-briefcase"></i>
    </div>
    <div class="control control-4" data-id="contact">
        <i class="fa-regular fa-envelope"></i>
    </div>
</div> -->

<div class="controls">
    {#each Array.from({ length: 4 }, (_, i) => i + 1) as index}
      <div class="control {index === activeBtnIndex + 1 && 'active-btn'}" data-id={index} on:click={() => setActiveBtn(index - 1)}>
        {#if index === 1}
          <i class="fa-solid fa-house"></i>
        {:else if index === 2}
          <i class="fa-solid fa-user"></i>
        {:else if index === 3}
          <i class="fa-solid fa-briefcase"></i>
        {:else}
          <i class="fa-regular fa-envelope"></i>
        {/if}
      </div>
    {/each}
</div>

<!-- Review Code Above -->

<style>
    .controls
    {
        position: fixed;
        z-index: 10;
        top: 50%;
        right: 3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
    }

    .control{
        padding: 1rem;
        cursor: pointer;
        background-color: var(--color-grey-4);
        width: 55px;
        height: 55px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .7rem 0;
        box-shadow: var(--box-shadow-1);
    }

    .active-btn{
        background-color: var(--color-secondary) !important; /*Adding more precedence than normal with important*/
        transition: all .4s ease-in-out;
    }

    .active-btn > i{
        color: var(--color-white) !important;
    }
</style>