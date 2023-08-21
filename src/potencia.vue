<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded">
        <h1 class="text-center">Cálculo de Potência</h1>

        <form @submit.prevent="calcularPotencia()">
            <div class="col">
                <label>Número Base</label>
                <input type="number" name="base" id="base" class="form-control" v-model="base"/>
            </div>

            <div class="col mt-3">
                <label>Expoente</label>
                <input type="number" name="expoente" id="expoente" class="form-control" v-model="expoente"/>
            </div>

            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Calcular</button>
                <button type="button" @click="limparReferencias()" class="btn btn-danger">Limpar</button>
            </div>

            <div class="row mt-3">
                <div class="col-md-6">
                    <div class="mb-2">
                        <div class="d-grid gap-2">
                            <RouterLink to="/Divisao" class="btn btn-secondary">Divisão</RouterLink>
                            <RouterLink to="/subtracao" class="btn btn-secondary">Subtração</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-2">
                        <div class="d-grid gap-2">
                            <RouterLink to="/adicao" class="btn btn-secondary">Adição</RouterLink>
                            <RouterLink to="/mutiplicacao" class="btn btn-secondary">Mutiplicação</RouterLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <div class="d-grid gap-2">
                            <RouterLink to="/" class="btn btn-primary">Home</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <div class="d-grid gap-2">
                            <RouterLink to="/potencia" class="btn btn-secondary">Potência</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <h3 v-if="potencia != null" class="mt-3 text-center">A potência de {{ base }} elevado a {{ expoente }} é: {{ potencia }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const base = ref(0)
const expoente = ref(0)

const potencia = ref(null)

function calcularPotencia() {
    potencia.value = Math.pow(base.value, expoente.value)
}

function limparReferencias() {
    base.value = expoente.value = 0
    potencia.value = null
}
</script>
