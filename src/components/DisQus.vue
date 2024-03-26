<template>
    <div>
        <div class="container my-5">
            <div id="disqus_thread"></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered
                    by
                    Disqus.</a></noscript>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DisQus',
};
(function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://http-localhost-8080-r2ri9xbjg5.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
</script>

<style scoped></style>