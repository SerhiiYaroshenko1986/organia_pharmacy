import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  mobileOpen = false;
  query = '';
  currentYear = new Date().getFullYear();

  cities = ['Київ', 'Львів', 'Харків', 'Одеса'];
  languages = ['UA', 'EN'];
  selectedCity = this.cities[0];
  selectedLanguage = this.languages[0];


categories = [
    { name: 'Знеболювальні', icon: 'healing' },
    { name: 'Вітаміни', icon: 'local_florist' },
    { name: 'Краса та догляд', icon: 'spa' },
    { name: 'Для дітей', icon: 'child_friendly' },
    { name: 'Тиск та серце', icon: 'favorite' },
    { name: 'Імунітет', icon: 'coronavirus' }
  ];


  steps = [
  { step: '01', title: 'Рецептура', desc: 'Персоналізовані формули за погодженням з лікарем.' },
  { step: '02', title: 'Лабораторія', desc: 'Аналіз сировини й проміжного продукту.' },
  { step: '03', title: 'Контроль якості', desc: 'Фінальні тести, сертифікати та простежуваність.' },
  ];


  promos = [
  { title: 'Комплекс вітамінів – мінус 15%', until: '30.09' },
  { title: 'Сезон ГРВІ: 2+1', until: '15.10' },
  { title: 'Лінійка дитячих сиропів –20%', until: '05.10' },
  ];


  stats = [
  { value: '10+ років', label: 'досвіду виробництва' },
  { value: 'ISO/GMP', label: 'системи якості' },
  { value: '24/7', label: 'підтримка клієнтів' },
  { value: '500k+', label: 'замовлень виконано' },
];
}
