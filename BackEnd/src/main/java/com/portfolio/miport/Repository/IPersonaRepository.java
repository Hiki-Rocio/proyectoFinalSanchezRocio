package com.portfolio.miport.Repository;

import com.portfolio.miport.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository  extends JpaRepository<Persona,Long> {
    
}
