import { Component } from '@angular/core';

@Component({
  selector: 'cmx-header-menu',
  templateUrl: 'cmx-header-menu.html',
  styleUrls: ['cmx-header-menu.scss'],
})
export class CmxHeaderMenu {
  public navItems: any = [
    {
      name: 'Dashboard',
      icon: 'flaticon-line-graph',
      subItems: [
        {
          name: 'Tradicional',
          icon: 'flaticon-line-graph',
          route: '/',
        },
        {
          name: 'Operacional',
          icon: 'flaticon-users',
          route: 'flaticon-line-graph',
        },
      ],
    },
    {
      name: 'Financeiro',
      icon: 'flaticon-coins',
      route: null,
      subItems: [
        {
          name: 'Relatório',
          icon: 'flaticon-file',
          route: 'financeiro/resultado',
        },
        {
          name: 'Custos',
          icon: 'flaticon-coins',
          route: 'financeiro/custos',
        },
        {
          name: 'Notas fiscais',
          icon: 'flaticon-invoice',
          route: 'supply-chain/notas-fiscais',
        },
        {
          name: 'A Receber',
          icon: 'flaticon-users',
          route: 'invoices-receivable',
        },
        {
          name: 'Taxas',
          icon: 'flaticon-graphic-1',
          route: 'financeiro/taxas-cambiais',
        },
      ],
    },
    {
      name: 'Importação',
      icon: 'flaticon-transport',
      route: null,
      subItems: [
        {
          name: 'Tradicional',
          icon: 'flaticon-transport',
          route: 'supply-chain/importacao/status',
        },
        {
          name: 'Chassi',
          icon: 'flaticon-car',
          route: 'supply-chain/chassi/status',
        },
      ],
    },
    {
      name: 'Performance',
      icon: 'flaticon-graph',
      route: null,
      subItems: [
        {
          name: 'Canal Status',
          icon: 'flaticon-users',
          route: 'supply-chain/channel',
        },
        {
          name: 'Cadastro SLA',
          icon: 'flaticon-user',
          route: 'sla/cadastro',
        },
        {
          name: 'SLA Status',
          icon: 'flaticon-users',
          route: 'sla/status',
        },
        {
          name: 'Validações DI',
          icon: 'flaticon-users',
          route: 'di-validation',
        },
        {
          name: 'Avarias/Faltas',
          icon: 'flaticon-user',
          route: 'damage',
        },
      ],
    },
    {
      name: 'Relatórios',
      icon: 'flaticon-statistics',
      route: null,
      subItems: [
        {
          name: 'Follow UP',
          icon: 'flaticon-transport',
          route: null,
          subItems: [
            {
              name: 'IMP',
              icon: 'flaticon-user',
              route: 'report/followup-imp',
            },
            {
              name: 'Chassi',
              icon: 'flaticon-users',
              route: 'report/followup-chassi',
            },
            {
              name: 'SKU',
              icon: 'flaticon-user',
              route: 'report/followup-sku',
            },
          ],
        },
        {
          name: 'Traders',
          icon: 'flaticon-users',
          route: 'report/traders',
        },
        {
          name: 'Despesas',
          icon: 'flaticon-users',
          route: 'report/despesas',
        },
        {
          name: 'Movimentações Diárias',
          icon: 'flaticon-users',
          route: 'report/automotive-daily',
        },
        {
          name: 'Valores de Fretes',
          icon: 'flaticon-users',
          route: 'freight-rate',
        },
      ],
    },
    {
      name: 'Documentos',
      icon: 'flaticon-folder-2',
      route: 'document',
      subItems: null,
    },
    {
      name: 'Cadastros',
      icon: 'flaticon-folder-1',
      route: null,
      subItems: [
        {
          name: 'Operacional',
          icon: 'flaticon-users',
          route: 'cadastro/supply-chain',
        },
        {
          name: 'Automotivo',
          icon: 'flaticon-users',
          route: 'cadastro/automotivo',
        },
        {
          name: 'Rastreio BL',
          icon: 'flaticon-users',
          route: 'cadastro/bl-tracking',
        },
        {
          name: 'Financeiro',
          icon: 'flaticon-users',
          route: 'cadastro/financeiro',
        },
        {
          name: 'Invoice',
          icon: 'flaticon-users',
          route: 'cadastro/invoice-external',
        },
        {
          name: 'Cotação',
          icon: 'flaticon-time-2',
          route: 'quotation',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.navItems);
  }
}
