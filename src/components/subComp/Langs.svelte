<script>
    export let language;
    export let level;
</script>

<div class="langBox">
    {language} - {level}
</div>

<style>
    .langBox{
        border: 1px solid var(--color-secondary);
        border-radius: 20px;
        margin-top: 10px;
        width: 55%;
        min-height: 5rem;
        padding: 10px;
        text-align: center;
    }
</style>