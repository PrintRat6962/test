<script>
    import ContactItem from "./subComp/ContactItem.svelte";
</script>

<section class="section sec4 contact">
    <div class="contact-container">
        <div class="main-title">
            <h2>Contact <span>Me</span><span class="bg-text">Let's Talk</span></h2>
        </div>
        <div class="contact-content-con">
            <div class="left-contact">
                <h4>Info On Me</h4>
                <p class="description">
                    Want to keep in touch? Feel free to reach out with the email below!
                </p>
                <div class="contact-info">
                    <ContactItem icon = "fas fa-envelope" item = "Email" ans = "xtianericreyes@gmail.com"/>
                    <ContactItem icon = "fas fa-user-graduate" item = "Education" ans = "Lake Forest College, IL"/>
                    <ContactItem icon = "fas fa-location-pin" item = "Location" ans = "Chicago, IL"/>
                    <!-- <ContactItem icon = "fa-brands fa-linkedin-in" item = "LinkedIn" ans = "https://www.linkedin.com/in/christian-reyes10/"/> -->
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .sec4{
	    /* display: none; */
	    transform: translateY(0) scale(1);
    }

    .contact-content-con{
        display: flex;
        justify-content: center;
        padding-top: 3.5rem;
    }

    .left-contact{
        width: 70%;
    }

    .left-contact > h4{
        text-align: center;
        margin-top: 1rem;
        font-size: 2rem;
        text-transform: uppercase;
    }

    .left-contact > .description{
        margin: 1rem 0;
        line-height: 2rem;
        text-align: center;
    }

    .left-contact > p{
        margin: 1rem 0;
        line-height: 2rem;
    }

    .left-contact > .contact-info{
        padding-left: 3rem;
        
    }
</style>