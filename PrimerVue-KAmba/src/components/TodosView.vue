<script setup>
import { reactive } from "vue";
import InputNew from "./InputNew.vue";

let boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "tablero 1",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Features de archivos",
      },
      {
        id: crypto.randomUUID(),
        title: "resolver bug",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "tablero 2",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Reporte",
      },
      {
        id: crypto.randomUUID(),
        title: "resolver otra cosa",
      },
    ],
  },
]);

function handleNewItem(text, board) {
  console.log(text.value, board.id, board.name);
  board.items.push({
    id: crypto.randomUUID(),
    title: text,
  });
}

function handleNewBoard() {
  const name = prompt(" Nombre de la Tabla ");

  if (!!name) {
    boards.push({
      id: crypto.randomUUID(),
      name: name,
      items: [],
    });
  }
}

function starDrag(evt, board, item) {
  evt.dataTransfer.setData(
    "text/plain",
    JSON.stringify({ boardId: board.id, itemId: item.id }) 
  );
}

function onDrop(evt, dest){
 
    const {boardId, itemId} = JSON.parse(
        evt.dataTransfer.getData("text/plain")
    );

   const originBoard = boards.find(item=>item.id === boardId);
   const originItem = originBoard.items.find(item => item.id === itemId)

   console.log(originBoard.name, originItem.title); 


   dest.items.push({...originItem})
   originBoard.items = originBoard.items.filter(item=> item !== originItem);
}



</script>

<template>
  <nav>
    <ul>
      <li><a href="#" @click.prevent="handleNewBoard">Tablero Kanban Ñ</a></li>
    </ul>
  </nav>

      <div class="boards-container">
        <div class="boards">
          <div 
          class="board" 
          @drop="onDrop($event, board)" 
          @dragover.prevent 
          @dragenter.prevent  
          v-for="board in boards" 
          :key="board.id">

            <div>{{ board.name }}</div>

            <InputNew :on-new-item="(text) => handleNewItem(text, board)" />

            <div class="items">
              <div class="item" 
              draggable="true" 
              @dragstart="starDrag($event, board, item)" 
              v-for="item in board.items" 
              :key="item.id">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>

nav {
background-color: black;
margin-bottom: 10px;
}

nav ul{
list-style: none;
padding: 0;
margin: 0;
display: flex;
} 

nav ul li a {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
}

.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}

.boards {
  display: flex;
  gap: 10px;
}

.board {
  background: #ccc;
  padding: 10px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.item {
  background: white;
  padding: 10px;
  box-sizing: border-box;
}
</style>
