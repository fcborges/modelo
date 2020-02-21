import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  constructor(private firestore: AngularFirestore) { }

  /* create_NewIcecream : Cria um novo registro na coleção especificada usando o método add */
  create_NewAluno(record) {
    return this.firestore.collection('Alunos').add(record);
  }
  /*read_Icecream: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  read_Alunos() {
    return this.firestore.collection('Alunos').snapshotChanges();
  }
  /*update_Icecream : atualiza o registro pegando o ID e chamando o método de atualização */
  update_Aluno(recordID, record) {
    this.firestore.doc('Alunos/' + recordID).update(record);
  }
  /*delete_Icecream : chama o método de exclusão  ao registrar o ID*/
  delete_Aluno(record_id) {
    this.firestore.doc('Alunos/' + record_id).delete();
  }

}
