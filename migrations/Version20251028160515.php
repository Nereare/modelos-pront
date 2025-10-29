<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251028160515 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE
              user
            ADD
              first_name VARCHAR(128) NOT NULL,
            ADD
              last_name VARCHAR(256) NOT NULL,
            ADD
              registry_type VARCHAR(255) NOT NULL,
            ADD
              registry_state VARCHAR(255) NOT NULL,
            ADD
              registry_number BIGINT NOT NULL,
            ADD
              phone VARCHAR(32) DEFAULT NULL,
            ADD
              email VARCHAR(256) NOT NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE
              user
            DROP
              first_name,
            DROP
              last_name,
            DROP
              registry_type,
            DROP
              registry_state,
            DROP
              registry_number,
            DROP
              phone,
            DROP
              email
        SQL);
    }
}
