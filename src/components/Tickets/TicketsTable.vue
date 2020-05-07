<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      :title="title"
      :data="data"
      :columns="columns"
      row-key="id"
      bordered
      rows-per-page-label="Tickets par page"
      no-data-label="Aucun ticket"
      :pagination.sync="pagination"
      @row-click="OpenTicketDetail"
    />
  </div>
</template>

<script>
export default {
  name: 'TicketsTable',
  props: ['data', 'title'],
  data () {
    return {
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        {
          name: 'id',
          required: true,
          label: 'Numéro',
          align: 'center',
          field: row => row.id,
          sortable: true
        },
        {
          name: 'name',
          required: true,
          label: 'Nom',
          align: 'center',
          field: row => row.name,
          sortable: true
        },
        {
          name: 'customer',
          required: true,
          label: 'Client',
          align: 'center',
          field: row => row.customer,
          sortable: true
        },
        {
          name: 'criticality',
          required: true,
          label: 'Criticité',
          align: 'left',
          field: row => row.criticality,
          sortable: true
        },
        {
          name: 'inCharge',
          required: false,
          label: 'Pris en charge par',
          align: 'left',
          field: row => row.inCharge,
          sortable: true
        }
      ]
    }
  },
  methods: {
    // évènement déclenché au click sur une ligne
    // envoie par défaut l'évènement et la ligne associée
    OpenTicketDetail (event, row) {
      this.$router.push({ name: 'ticketDetail', params: { id: row.id } })
    }
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 450px
  max-width: 1000px
  width: 750px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #c1f4cd

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
