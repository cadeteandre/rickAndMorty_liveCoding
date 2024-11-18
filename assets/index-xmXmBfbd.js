(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const l="https://rickandmortyapi.com/api",f=`${l}/character`,m=`${l}/location`,y=`${l}/episode`,c=document.getElementById("output"),a=document.getElementById("api-character"),d=document.getElementById("api-location"),p=document.getElementById("api-episode");a==null||a.addEventListener("click",async()=>{try{const t=await(await fetch(f)).json();c.innerHTML="",console.log(t.results),t.results.forEach(s=>{const r=document.createElement("div");r.innerHTML=h(s),c.appendChild(r)})}catch(e){console.error(e)}});function h(e){return`
    <h4>Name:${e.name}</h4>
    <p>Status: ${e.status}</p>
    <p>Gender: ${e.gender}</p>
    <p>Location: ${e.location.name}</p>
    <img src="${e.image}" alt="${e.name}">
  `}d==null||d.addEventListener("click",async()=>{try{const t=await(await fetch(m)).json();c.innerHTML="";for(const s of t.results){const r=document.createElement("div");r.innerHTML=await g(s),c.appendChild(r)}}catch(e){console.error(e)}});async function g(e){const t=await u(e.residents);return`
    <p>Name: ${e.name} </p>
    <p>Type: ${e.type} </p>
    <p>Residents: ${t} </p>
  `}async function u(e){const t=[];for(const s of e)try{const n=await(await fetch(s)).json();t.push(n.name)}catch(r){console.error(r)}return t.join("")}p==null||p.addEventListener("click",async()=>{try{const t=await(await fetch(y)).json();c.innerHTML="",await Promise.all(t.results.map(async s=>{console.log(s);const r=document.createElement("div");r.innerHTML=await E(s),c.appendChild(r)}))}catch(e){console.error(e)}});async function E(e){const t=await u(e.characters);return`
    <p>Name: ${e.name} </p>
    <p>Air date: ${e.air_date} </p>
    <p>Characters: ${t} </p>
  `}
