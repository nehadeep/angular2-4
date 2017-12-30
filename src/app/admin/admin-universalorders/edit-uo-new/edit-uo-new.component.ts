
import { Component, OnInit, ViewChild, EventEmitter} from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {CommonDataService} from '../../../shared/services/common-data.service';
import { EditUONewDisplayModel} from '../../../shared/models/adminModel';

import { ComponentBase } from '../../../shared/component/component-base';
import { IEditUONewRequestModel } from '../../../shared/models/models';
import { EntityState } from '../../../shared/myenum';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder
 } from '@angular/forms';


@Component({
  selector: 'app-edit-uo-new',
  templateUrl: './edit-uo-new.component.html',
  styleUrls: ['./edit-uo-new.component.css']
})

export class EditUoNewComponent extends ComponentBase  implements OnInit {

    // @ViewChild('editUOnewForm') formCtrl: NgForm;
form: FormGroup;
    public formGrp: FormGroup;
    public isDirty: boolean;
    public getWebsRegionService: CompleterData;
    public getOrderStatusDataService: CompleterData;
    public getAFS_System: CompleterData;
    public getManagersNameDataService: CompleterData;

 public displayEditUoNewModel: EditUONewDisplayModel = <EditUONewDisplayModel>{}; // data model properties coming 'from adminmodal'
 public _editUONewRequestModel: IEditUONewRequestModel = <IEditUONewRequestModel>{};

    constructor(private router: Router,
        private completerService: CompleterService,
        private _commonDataService: CommonDataService,
        private formBuilder: FormBuilder
        ) {
        super();

       // this.getWebsRegionService = this.completerService.local(
      // this._commonDataService.getWebsRegion(), 'websRegionCode', 'websRegionCode');
      //  this.getOrderStatusDataService = this.completerService.local(this._commonDataService.getUoStatus(), 'description', 'description');
       // this.getAFS_System = this.completerService.local(this._commonDataService.getYesNo(), 'description', 'description');
        this.getManagersNameDataService = this.completerService.local(
          this._commonDataService.getManagerName(), 'managerName', 'managerName');

    }

    ngOnInit() {
        console.log(this.form, '44444');
      this.form = this.formBuilder.group({
        manager: [null, Validators.required],
        websRegion: [null,  Validators.required],
        orderStatus: [null,  Validators.required],
        AFSSystem: [null,  Validators.required]
      });

    }
   isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }


    private validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
    public saveUniversalSearchData() {

      if (this.form.valid) {
      console.log('form submitted', this._editUONewRequestModel);
         this._editUONewRequestModel.mgr_Id = this.getValueByCode(
         this.getManagersNameDataService['_data'], this._editUONewRequestModel.mgr_Id, 'managerName', 'managerId');
    } else {
      this.validateAllFormFields(this.form);
    }
//        if (this.formCtrl.valid) {
//
//
//            this._editUONewRequestModel.univ_Ord_Stat = this.getValueByCode(
      // this.getOrderStatusDataService['_data'], this._editUONewRequestModel.univ_Ord_Stat, 'description', 'code');

//
//            this._editUONewRequestModel.webs_Regn_Cd = this.getValueByCode(
      // this.getWebsRegionService['_data'], this._editUONewRequestModel.webs_Regn_Cd, 'websRegionCode', 'websRegionCode');
//
//            this._editUONewRequestModel.afs_Flg = this.getValueByCode(
      // this.getAFS_System['_data'], this._editUONewRequestModel.afs_Flg, 'description', 'description');
//            this._editUONewRequestModel.ordr_Dt = new Date(this.getFormattedDate(this.displayEditUoNewModel.ordr_Dt));
//            this._editUONewRequestModel.compl_Dt = new Date(this.getFormattedDate(this.displayEditUoNewModel.compl_Dt));
//            //this._editUONewRequestModel.newOpn_Evnt_Id = this.displayEditUoNewModel.newOpenEvtID;
//            console.log('in the click', this._editUONewRequestModel);
//
//            this._universalOrderSearchService.createNewEditUO(this._editUONewRequestModel).subscribe((resp) => {
//                console.log('universal success', resp);
//            });
//        }
//        else {
//            //this.validateAllFormFields(this.formCtrl);
//        }
    }

//    getFormattedDate(date) {
//        let currentDate = new Date(date);
//      return currentDate.getMonth()+1 + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
//    }

}

