<template>
    <div class="position-absolute top-50 start-50 translate-middle border p-5 rounded">
        <h1 class="text-center">Operação de Subtração</h1>

        <form @submit.prevent="subtracao()">
            <div class="col">
                <label>1° Número</label>
                <input type="number" name="n1" id="n1" class="form-control" v-model="n1"/>
            </div>

            <div class="col mt-3">
                <label>2° Número</label>
                <input type="number" name="n2" id="n2" class="form-control" v-model="n2"/>
            </div>

            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Subtrair</button>
                <button type="submit" @click="limparReferencias()" class="btn btn-danger">Limpar</button>
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
        <h3 v-if="subtrair != null" class="mt-3 text-center">O resultado da divisão entre {{ n1 }} e {{ n2 }} : {{ subtrair }}</h3>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const n1 = ref(0)
    const n2 = ref(0)

    const subtrair = ref(null)

    function subtracao() {
        subtrair.value = n1.value - n2.value
    }

    function limparReferencias() {
        n1.value = n2.value = 0
        subtrair.value = null
    }
</script>
    