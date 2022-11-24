import { PATH_DASHBOARD } from '@Config/paths';
import { TypesConfigNavbar } from 'src/@types/dashboard';

export const configNavbarTabs: TypesConfigNavbar[] = [
  { text: 'Home', href: '#home' },
  { text: 'Sobre', href: '#about' },
  { text: 'Venda', href: `${PATH_DASHBOARD}/venda` },
];
