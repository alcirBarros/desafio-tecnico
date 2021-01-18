export const adminLteConf = {
  skin: 'blue',
  sidebarLeftMenu: [
    { label: 'MAIN NAVIGATION', separator: true },
    { label: 'Parâmetros', iconClasses: 'fa fa-th-list', children: [
      { label: 'Veiculo', route: 'parameter/vehicle', iconClasses: 'fa fa-tasks' },
    ]
    },
  ]
};
