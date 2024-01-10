import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  data = [
    {
      id: 1,
      question: 'What is Angular?',
      answer:
        "Answer: Angular is a popular open-source web application framework developed by Google. It's written in TypeScript and allows developers to build dynamic, single-page web applications (SPAs).",
    },
    {
      id: 2,
      question: 'Explain the key features of Angular.',
      answer:
        'Answer: Angular provides features such as two-way data binding, dependency injection, modularization, declarative templates, and a comprehensive set of tools for building web applications.',
    },
    {
      id: 3,
      question: 'What is TypeScript?',
      answer:
        'Answer: TypeScript is a superset of JavaScript that adds static typing to the language. It is the primary language used in Angular development.',
    },
  ];
}
