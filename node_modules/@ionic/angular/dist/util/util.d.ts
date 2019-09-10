import { HTMLStencilElement } from '../types/interfaces';
export declare function proxyMethod(ctrlName: string, doc: Document, methodName: string, ...args: any[]): Promise<any>;
export declare function ensureElementInBody(elementName: string, doc: Document): HTMLStencilElement;
