package com.atividade.banco.controller;

import com.atividade.banco.entity.Professor;
import com.atividade.banco.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProfessorController {

    @Autowired
    private ProfessorRepository pfRepository;

    @PostMapping("/professor/add")
    public ResponseEntity<Boolean> adicionarProfessor(@RequestBody Professor p) {
        pfRepository.save(p);
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @GetMapping("/professor/view")
    public ResponseEntity<List<Professor>> buscarProfessores() {
        List<Professor> professores = pfRepository.findAll();
        return new ResponseEntity<>(professores, HttpStatus.OK);
    }

    @PutMapping("/professor/atualizar/{id}")
    public ResponseEntity<Boolean> atualizarProfessor(@PathVariable Integer id, @RequestBody Professor professorAtualizado) {
        if (pfRepository.existsById(id)) {
            professorAtualizado.setId(id);
            pfRepository.save(professorAtualizado);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
    }

    @DeleteMapping("/professor/deletar/{id}")
    public ResponseEntity<Boolean> deletarProfessor(@PathVariable Integer id) {
        if (pfRepository.existsById(id)) {
            pfRepository.deleteById(id);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }

}
