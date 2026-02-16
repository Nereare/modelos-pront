<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260214093631 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE text (
              id INT AUTO_INCREMENT NOT NULL,
              owner_id INT NOT NULL,
              text LONGTEXT NOT NULL,
              INDEX IDX_3B8BA7C77E3C61F9 (owner_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE
              text
            ADD
              CONSTRAINT FK_3B8BA7C77E3C61F9 FOREIGN KEY (owner_id) REFERENCES user (id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE text DROP FOREIGN KEY FK_3B8BA7C77E3C61F9');
        $this->addSql('DROP TABLE text');
    }
}
