let curr_host_url = window.location.pathname; // /main.html
        curr_host_url = curr_host_url.replace('/', ''); // main.html
        curr_host_url = curr_host_url.replace('.html', ''); // main
        console.log(curr_host_url);
        const element = document.getElementById(curr_host_url);
        console.log(element);
        if(curr_host_url){
            document.getElementById(curr_host_url).classList.add("headForm");
            console.log(curr_host_url);
        }