### Examples to communicate between angular parent and child component


**Parent to child communication by @Input()**
- @Input() Decorate child property with @Input() annotation.
- In Parent component HTML section pass value via property binding
- Check example in parent-to-child folder
- Example
	> communication.component.html
	> -----------------------------
	 > <app-parent-to-child [name]='parentProperty'></app-parent-to-child>
	 parentProperty property is defined in communication.component.ts as Parent component property.
	 it is property bindning.
	 
**Child to Parent communication by @Output()**
- Create Object of EventEmitter and decorate it with @Output().
> child-to-parent.component.ts
> @Output()
> valueChanged = new EventEmitter();
- Emit events with data to Parent callback handler (example: onValueChanged() defined in communication.component.ts)
> this.valueChanged.emit(<pass data in function>);
- Check example in child-to-parent folder
- Example
	> communication.component.html
	> -----------------------------
	 > <app-child-to-parent (valueChanged)='onValueChanged($event)'></app-child-to-parent>
	
	