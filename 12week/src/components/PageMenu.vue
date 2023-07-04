<template>
    <aside>
        <nav>
            <ul>
                <li>
                    <router-link to="/Test">메뉴1</router-link></li>
                   <li><router-link to="/Home">메뉴2</router-link></li> 
                   <li><a href="#">메뉴3</a></li> 
            </ul>
        </nav>
    </aside>
</template>

<script>
export default{
    name : 'PageMenu'
}
</script>

<style>
.Pagemenu {
    position : fixed;
    top : 0;
    background-color: black;
}
.Pagememu ul {
    list-style: none;
    margin: 0%;
    padding: 0;
}
</style>