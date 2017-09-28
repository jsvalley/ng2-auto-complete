import { ComponentFactoryResolver, ComponentRef, EventEmitter, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from "@angular/core";
import { NguiAutoCompleteComponent } from "./auto-complete.component";
import { AbstractControl, ControlContainer, FormControl } from "@angular/forms";
/**
 * display auto-complete section with input and dropdown list when it is clicked
 */
export declare class NguiAutoCompleteDirective implements OnInit, OnChanges {
    private resolver;
    viewContainerRef: ViewContainerRef;
    private parentForm;
    autoCompletePlaceholder: string;
    source: any;
    pathToData: string;
    minChars: number;
    displayPropertyName: string;
    acceptUserInput: boolean;
    maxNumList: string;
    selectValueOf: string;
    loadingTemplate: any;
    listFormatter: any;
    loadingText: string;
    blankOptionText: string;
    noMatchFoundText: string;
    valueFormatter: any;
    tabToSelect: boolean;
    selectOnBlur: boolean;
    matchFormatted: boolean;
    autoSelectFirstItem: boolean;
    openOnFocus: boolean;
    blurAfterClick: boolean;
    ngModel: String;
    formControlName: string;
    extFormControl: FormControl;
    zIndex: string;
    isRtl: boolean;
    ngModelChange: EventEmitter<{}>;
    valueChanged: EventEmitter<{}>;
    customSelected: EventEmitter<{}>;
    componentRef: ComponentRef<NguiAutoCompleteComponent>;
    wrapperEl: HTMLElement;
    el: HTMLElement;
    acDropdownEl: HTMLElement;
    inputEl: HTMLInputElement;
    formControl: AbstractControl;
    revertValue: any;
    private dropdownJustHidden;
    private scheduledBlurHandler;
    private documentClickListener;
    constructor(resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, parentForm: ControlContainer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    showAutoCompleteDropdown: (event?: any) => void;
    blurHandler(event: any): void;
    hideAutoCompleteDropdown: (event?: any) => void;
    styleAutoCompleteDropdown: () => void;
    setToStringFunction(item: any): any;
    selectNewValue: (item: any) => void;
    selectCustomValue: (text: string) => void;
    enterNewText: (value: any) => void;
    private keydownEventHandler;
    private inputEventHandler;
    private renderValue(item);
}
