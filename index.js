const searchInput = document.querySelector('input');
const profilesDiv = document.querySelector('.profiles');
const profiles = [
  { name: 'Shyam Gupta', img: 'https://plus.unsplash.com/premium_photo-1688497831040-753ea826d174?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8MnwwfHx8MA%3D%3D' },
  { name: 'Rohan Kumar', img: 'https://plus.unsplash.com/premium_photo-1668319915454-ee79c9f81f5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8MnwwfHx8MA%3D%3D' },
  { name: 'Nitesh Gurung', img: 'https://images.unsplash.com/photo-1642449662982-24d3693833a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDJ8MHx8fDA%3D' },
  { name: 'Manish Sharma', img: 'https://images.unsplash.com/photo-1642449662982-24d3693833a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDJ8MHx8fDA%3D' },
  { name: 'Suresh Thapa', img: 'https://images.unsplash.com/photo-1642449662982-24d3693833a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDJ8MHx8fDA%3D' },
]
function showPeople(data){
  profilesDiv.innerHTML = '';
data.forEach(profile => {
  profilesDiv.innerHTML += `
    <div class="profile">
      <img src="${profile.img}" alt="${profile.name}">
      <h3>${profile.name}</h3>
    </div>
  `
})
}
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(value));
  if(filteredProfiles.length === 0){
    notFound();
    return;
  }
  showPeople(filteredProfiles);
})

function notFound(){
  profilesDiv.innerHTML = '<h2>No profile found</h2>';
}
window.addEventListener('load', () => {
  showPeople(profiles);
})

