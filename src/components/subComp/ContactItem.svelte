<script>
    export let icon;
    export let item;
    export let ans;
</script>

<div class="contact-item">
    <div class="icon">
        <i class = {icon}></i>
        {item}:
    </div>
    <p>
        {ans}
    </p>
</div>

<style>
    .contact-item{
        width: 90%;
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .contact-item > p{
        margin: .3rem 0 !important;
        padding: 0 !important;
    }

    .contact-item > .icon{
        display: grid;
        grid-template-columns: 40px 1fr;
    }

    .icon > i{
        display: flex;
        align-items: center;
        font-size: 1.3rem;
    }
</style>