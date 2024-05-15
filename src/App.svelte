<script>
	import Sec1Header from "./components/sec1Header.svelte";
	import Sec2About from "./components/sec2About.svelte";
	import Sec3Portfolio from "./components/sec3Portfolio.svelte"
	import Sec4Contact from "./components/sec4Contact.svelte"

	let activeBtnIndex = 0;

    const setActiveBtn = (index) => {
        activeBtnIndex = index
		console.log(activeBtnIndex)
    }
</script>

<main>
	{#if activeBtnIndex === 0}
		<Sec1Header />
	{/if}
	<main>
		{#if activeBtnIndex === 1}
			<Sec2About />
		{:else if activeBtnIndex === 2}
			<Sec3Portfolio />
		{:else if activeBtnIndex === 3}
			<Sec4Contact />
		{/if}
	</main>
	
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
</main>

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